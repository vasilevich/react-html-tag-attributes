import React, {useEffect, useState} from "react";


interface IHtmlTagsProps {
    [key: string]: string;
}

/**
 * Set attribute to <html> tag
 * @param key
 * @param value
 */
const setHtmlAttr = (key: string, value: string) => {
    if (value) {
        document.getElementsByTagName("html")[0].setAttribute(key, value);
    }
}

const setHtmlAttrs = (keyValues: IHtmlTagsProps) => {
    for (const key in keyValues) {
        setHtmlAttr(key, keyValues[key]);
    }
}
/**
 * Converts any inputs, be it objects, arrays, and strings, into string keys
 * @param inputKeys
 */
const keysParser = (...inputKeys: any[]) => {
    return inputKeys
        .map(key => {
            if (typeof key === 'object' && !Array.isArray(key)) {
                return Object.keys(key);
            }
            return key;
        })
        .flat();
}

/**
 * remove Attributes from <Html> tag
 * @param key
 * @param value
 */
const removeHtmlAttr = (...keys: any[]) => {
    const html = document.getElementsByTagName("html")[0];
    if (html) {
        for (const key of keysParser(...keys)) {
            html.removeAttribute(key);
        }
    }
}
/**
 * fills the keys with the current values in the <Html> tag
 * @param key
 * @param value
 */
const getCurrentHtmlTagValues = (...keys: any[]): IHtmlTagsProps => {
    const html = document.getElementsByTagName("html")[0];
    const object: IHtmlTagsProps = {};
    if (html) {
        for (const key of keysParser(...keys)) {
            object[key] = html.getAttribute(key);
        }
    }
    return object;
}

const HtmlTags = (props: IHtmlTagsProps): any => {
    const [originalTags, setOriginalTags] = useState({});
    const [tags, setTags] = useState({});


    useEffect(() => {
        if (!Object.keys(tags).length) {
            setOriginalTags(getCurrentHtmlTagValues(props));
        }
        removeHtmlAttr(tags);
        setHtmlAttrs(props);
        setTags(props);
    }, [props, tags, setTags, originalTags, setOriginalTags]);

    useEffect(() => {
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

export default React.memo(HtmlTags);
