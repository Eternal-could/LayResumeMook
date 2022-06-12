import * as React from 'react';

interface IProps {
  /**
   * @description 标题
   */
  text: string;
  /**
   * @description 样式
   */
  styles?: React.CSSProperties;
}

const Title = ({text, styles}: IProps) => {
  return (
    <div style={styles}>{text}</div>
  )
}

export default Title
