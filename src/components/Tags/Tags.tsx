import s from "./Tags.module.scss";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilterCircleXmark} from "@fortawesome/free-solid-svg-icons";

export type TagsPropsType = {
    tags: Array<string>;
    deleteTag: (tagName: string) => void;
    filterNotes: (tagName: string) => void;
    clearFilter: () => void;
}

const Tags = React.memo(({tags, deleteTag, filterNotes, clearFilter}: TagsPropsType) => {

    return (
        <div className={s.tags + " custom-scroll"}>
            <FontAwesomeIcon
                onClick={clearFilter}
                size="2x"
                icon={faFilterCircleXmark}
                className={s.reset}
            />
            <ul className={s.tags__list}>
                {tags?.map(tag => (
                    <li
                        className={s.item__group}
                        key={tag + Math.floor(Math.random() * 100)}
                    >
						<span
                            className={s.item}
                            onClick={() => filterNotes(tag)}
                        >
							{tag}
						</span>
                        <span
                            onClick={() => deleteTag(tag)}
                            className={s.delete}
                        >
							&times;
						</span>
                    </li>
                ))}
            </ul>

        </div>
    );
});

export default Tags;
