"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const setHtmlAttr = (key, value) => {
    if (value) {
        document.getElementsByTagName("html")[0].setAttribute(key, value);
    }
};
const setHtmlAttrs = (keyValues) => {
    for (const key in keyValues) {
        setHtmlAttr(key, keyValues[key]);
    }
};
const keysParser = (...inputKeys) => {
    return inputKeys
        .map(key => {
        if (typeof key === 'object' && !Array.isArray(key)) {
            return Object.keys(key);
        }
        return key;
    })
        .flat();
};
const removeHtmlAttr = (...keys) => {
    const html = document.getElementsByTagName("html")[0];
    if (html) {
        for (const key of keysParser(...keys)) {
            html.removeAttribute(key);
        }
    }
};
const getCurrentHtmlTagValues = (...keys) => {
    const html = document.getElementsByTagName("html")[0];
    const object = {};
    if (html) {
        for (const key of keysParser(...keys)) {
            object[key] = html.getAttribute(key);
        }
    }
    return object;
};
const HtmlTags = (props) => {
    const [originalTags, setOriginalTags] = react_1.useState({});
    const [tags, setTags] = react_1.useState({});
    react_1.useEffect(() => {
        if (!Object.keys(tags).length) {
            setOriginalTags(getCurrentHtmlTagValues(props));
        }
        removeHtmlAttr(tags);
        setHtmlAttrs(props);
        setTags(props);
    }, [props, tags, setTags, originalTags, setOriginalTags]);
    react_1.useEffect(() => {
        return () => {
            removeHtmlAttr(tags);
            if (Object.keys(tags).length > 0) {
                setHtmlAttrs(originalTags);
            }
        };
    }, [tags, originalTags]);
    return (null);
};
HtmlTags.defaultProps = {};
exports.default = react_1.default.memo(HtmlTags);
//# sourceMappingURL=index.js.map