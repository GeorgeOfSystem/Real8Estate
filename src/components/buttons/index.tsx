interface Props {
  children: any;
  styles?: any;
}

const Buttons = (props: Props) => {
  const { children, styles } = props;
  return <button style={{ borderRadius: '6px', height: '30px' ,...styles}}>{children}</button>;
};

export default Buttons;

//---------------------
// 
// import { useRef, useState } from 'react';
// 
// /*----- Components -----*/
// import { Typography } from '../Typography';
// 
// /*----- Assets -----*/
// import styles from './index.module.css';
// import Image from 'next/image';
// 
// interface Props {
    // /**
    //  * Define the main color Type of the button. Can be "primary", "secondary", "ghost", or "ghostPink".
    //  */
    // type: 'primary' | 'secondary' | 'ghost' | 'ghostPink';
    // /**
    //  * Define Size of the button. Can be "large", "medium", or "small".
    //  */
    // size?: 'large' | 'medium' | 'small';
    // /**
    //  * Content of the button.
    //  */
    // children?: any;
    // /**
    //  * Additional styles for the button.
    //  */
    // style?: React.CSSProperties;
    // /**
    //  * Left icon of the button. Can not be used with right icon at the same time.
    //  */
    // leftIcon?: { src: string; alt: string };
    // /**
    //  * Right icon of the button. Can not be used with left icon at the same time
    //  */
    // rightIcon?: { src: string; alt: string };
    // /**
    //  * Callback function triggered when the button is clicked.
    //  */
    // onClick?: Function;
    // /**
    //  * Indicates if the button is disabled.
    //  */
    // disable?: boolean;
    // className?: any;
// }
// export const ButtonComponent = (props: Props) => {
    // const {
        // type,
        // size,
        // style,
        // onClick,
        // disable,
        // children,
        // leftIcon,
        // rightIcon,
        // className,
    // } = props;
    // const [isHover, setIsHover] = useState(false);
    // const getTextColor = () => {
        // if (disable && type.includes('ghost')) {
            // return '#A1A1AA';
        // } else if (type === 'ghost') {
            // return isHover ? '#1E3A8A' : '#1D4ED8';
        // } else if (type === 'ghostPink') {
            // return isHover ? '#701A75' : '#A21CAF';
        // } else {
            // return '#FDFFFC';
        // }
    // };
    // const geTextType = () => {
        // return size === 'large' ? 'h6' : size === 'medium' ? 'h7' : 'h8';
    // };
    // const [isFocused, setIsFocused] = useState(false);
// 
    // return (
        // <button
            // className={`${styles.buttonComponent} ${
                // disable ? styles.disable : styles[type]
            // } ${className}`}
            // style={{
                // border: isFocused
                    // ? `6px solid #${
                        //   type === 'primary'
                            //   ? '93c5fd'
                            //   : type === 'secondary'
                            //   ? 'f0abfc'
                            //   : 'dbeafe'
                    //   }
                    //   `
                    // : 'none',
                // ...style,
            // }}
            // onMouseOver={() => setIsHover(true)}
            // onMouseOut={() => setIsHover(false)}
            // onMouseDown={() => setIsFocused(true)}
            // onMouseUp={() => setIsFocused(false)}
            // onClick={() => onClick && onClick()}
            // disabled={disable}
        // >
            {/* {leftIcon && !rightIcon && ( */}
                // <Image
                    // width={24}
                    // height={24}
                    // src={leftIcon.src}
                    // alt={leftIcon.alt}
                    // className={`${styles.icon} ${styles[`icon-${size}`]} ${
                        // styles[`icon-${type}`]
                    // }`}
                // />
            // )}
            {/* {children && ( */}
                // <Typography
                    // type={geTextType()}
                    // color={getTextColor()}
                    // className={`${styles.text}`}
                // >
                    {/* {children} */}
                {/* </Typography> */}
            // )}
            {/* {rightIcon && !leftIcon && ( */}
                // <Image
                    // width={24}
                    // height={24}
                    // src={rightIcon.src}
                    // alt={rightIcon.alt}
                    // className={`${
                        // type.includes('ghost')
                            // ? styles[`icon-${type}`]
                            // : styles.icon
                    // } ${styles[`icon-${size}`]} `}
                // />
            // )}
        {/* </button> */}
    // );
// };
