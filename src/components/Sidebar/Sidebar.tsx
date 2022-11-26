import React, {useState} from 'react';
import s from "./Sidebar.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons";

type SidebarPropsType = {
    addItem: (title: string, color: string) => void
}

export const Sidebar = React.memo(({addItem}: SidebarPropsType) => {

    console.log('Add item form')

    let [title, setTitle] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const colors = ["#e4ee91", "#b693fd", "#00d4fe", "#fec971", "#fe9b72"];

    const classes = s.sidebar__list + `${isOpen ? " " + s.sidebar__list__active : ""}`;

    const addItemHandler = (color: string) => {
        addItem(title.trim(), color);
        setTitle("");
    }

    return <div className={s.sidebar}>

        <FontAwesomeIcon
            onClick={() => setIsOpen(!isOpen)}
            size="3x"
            icon={faCirclePlus}
            className={s.add}
        />
        <ul className={classes}>
            {colors.map((color, i) => (
                <li
                    key={i + 1}
                    style={{backgroundColor: color}}
                    className={s.sidebar__list__item}
                    onClick={() => {
                        addItemHandler(color)
                    }}
                />
            ))}
        </ul>
    </div>
});
