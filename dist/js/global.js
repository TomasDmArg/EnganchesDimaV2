export const $ = el => {
    if (document.querySelector(el)) {
        return document.querySelector(el);
    }
};
export const $$ = el => {
    if (document.querySelectorAll(el)) {
        return document.querySelectorAll(el);
    }
};

