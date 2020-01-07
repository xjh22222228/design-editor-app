import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import scroll from '../utils/scroll';
import offset from '../utils/offset';
import { isFunction } from 'lodash';
import { findDOMNode } from 'react-dom';

function scrollNodeToTop(node, offsets) {
  const pos = offset(node);
  const top = isFunction(offsets.top)
    ? offsets.top(pos.top)
    : pos.top + offsets.top;
  const left = isFunction(offsets.left)
    ? offsets.left(pos.left)
    : pos.left + offsets.left;
  scroll(document.body, left, top);
}

export default class DesignPreviewItem extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const { children } = this.props;

    return <div className="zent-design-preview-item">{ children }</div>;
  }

  scrollTop(offsets) {
    const node = findDOMNode(this);
    scrollNodeToTop(node, offsets);
  }
}
