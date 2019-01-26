import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'
import chipIcon from '../../asset/chip-icon.png'
import { CHIP_ICON_SIZE, COLORS, CHIP_ICON_SIZE_MOBILE } from '../../utils/config';


const Header = (props) => {
    return (
        <div className={css(styles.header)}>
            <div className={css(styles.leftContainer)}>
                <img src={chipIcon} className={css(styles.mainIcon)}></img>
                <div className={css(styles.headeTextContainer)}>
                    <h1 className={css(styles.headerText)}>ChipX</h1>
                    <span className={css(styles.tagline)}>Lending Platform</span>
                </div>
            </div>
            <div className={css(styles.rightContainer)}>
                <button className={css(styles.button)}> REQUEST ACCESS</button>
            </div>
        </div>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        width: '94%',
        padding: "3%",
        justifyContent: 'space-between',
        "@media (max-width: 700px)": {
            flexDirection: "column",
            alignItems: 'flex-start'
        },
        "@media (min-width: 700px)": {
            flexDirection: "row",
            textAlign: 'center',
        }
    },
    leftContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainIcon: {
        "@media (max-width: 700px)": {
            width: CHIP_ICON_SIZE_MOBILE,
            height: CHIP_ICON_SIZE_MOBILE
        },
        "@media (min-width: 700px)": {
            width: CHIP_ICON_SIZE,
            height: CHIP_ICON_SIZE
        }
    },
    headeTextContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 10
    },
    headerText: {
        color: COLORS.WHITE,
        fontWeight: 600,
        margin: 0,
        "@media (max-width: 700px)": {
            fontSize: 20,
        },
        "@media (min-width: 700px)": {
            fontSize: 35,
        }
    },
    tagline: {
        color: COLORS.BLUE,
        fontWeight: 400,
        fontSize: 20
    },
    button: {
        borderWidth: 1,
        borderRadius: 20,
        height: 40,
        width: 200,
        borderColor: COLORS.GREY,
        color: COLORS.WHITE,
        fontSize: 16,
        fontWeight: 400,
        backgroundColor: COLORS.OFF_BLACK
    },
    rightContainer: {
        display: 'flex',
        alignItems: 'center',
        "@media (max-width: 700px)": {
            marginTop: 10
        },
    }
})