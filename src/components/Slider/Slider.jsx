import { Radio } from '@mui/material';
import React, { useState } from 'react';

const Slider = () => {
    const array = ["1", "2", "3", "4"];
    const [value, setValue] = useState("1")
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className="slider">
            <div className="slider-images">
                <img src="https://i.artfile.me/wallpaper/04-07-2018/1920x1080/devushka-devushki--unsort--ryzhevolosye--1360188.jpg" alt="" />
                <img src="https://i.artfile.me/wallpaper/17-02-2019/1920x1080/devushka-devushki--unsort--ryzhevolosye--1440112.jpg" alt="" />
                <img src="https://img3.goodfon.com/original/1920x1080/d/9a/model-chernoe-plate-makiyazh.jpg" alt="" />
                <img src="https://motaen.com/upload/resize/1920/1080/upload/wallpapers/2018/01/27/18/05/55742/brunetka-devuska-plate-nozki-sidit-88a.jpg" alt="" />
            </div>
            <div className="slider-switchers">
                {
                    array.map(item => (
                        <Radio size="small" onChange={handleChange} value={item} checked={value === item} />
                    ))
                }
            </div>
        </div>
    );
};

export default Slider;