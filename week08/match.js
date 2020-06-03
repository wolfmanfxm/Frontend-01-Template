function match(selector, element) {
    if (selector === '*') {
      return true;
    }

    const selectorArray = selector.split(' ');

    if (selectorArray.length === 0) {
      return false;
    }

    if (selectorArray.length === 1) {
      return matchSingleElement(selector, element);
    }

    let ele = element;
    while (selectorArray.length && ele) {
      if (matchSingleElement(selectorArray[selectorArray.length - 1], ele)) {
        selectorArray.pop();
      }
      
      ele = ele.parentNode;
    }

    return !selectorArray.length;
  }

  function matchSingleElement(selector, element) {
    const regex = /^([a-z]+)?(#[a-z]+)?(\.[a-z]+)?(\[[a-z]+=[a-z]+\])?$/;
    // const lastSelector = selector.split(' ').slice(-1);

    const res = regex.exec(selector);
    // console.log(res);
    if (!res) {
      return false;
    }

    const [, type, id, cls, attr] = res;
    let isMatched;
    if (type) {
      isMatched = type.toUpperCase() === element.tagName;
    }

    if (id) {
      isMatched = id.slice(1) === element.id;
    }

    if (cls) {
      isMatched = [...element.classList].includes(cls.slice(1));
    }

    if (attr) {
      const [, key, value] = /^\[([a-z]+)=([a-z]+)\]$/.exec(attr);
      isMatched = element.getAttribute(key) === value;
    }

    return isMatched;
  }

  console.log(match('div #id.class', document.getElementById('id')));