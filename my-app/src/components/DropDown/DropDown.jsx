import {Children, cloneElement, isValidElement, useState} from "react";
import MenuItem from "./MenuItem/MenuItem";

export default function DropDown(props) {
    const {label} = props;
    const [isOpen, setOpen] = useState(false);
    const items = [
        { label: 'Moscow', value: 1 },
        { label: 'London', value: 2 },
        { label: 'Helsinki', value: 3 },
        { label: 'Rome', value: 4 },
        { label: 'Oslo', value: 5 },
    ];
    return (
        <div>
            <h2>Drop Down</h2>
            <div className="root">
                <button className="control" onClick={() => setOpen(true)} type='button'>{label}</button>
                {
                    isOpen && (
                        <menu className="Menu">
                            {
                                items.map(item => (
                                    <MenuItem key={item.value} value={item}>
                                        {item.label}
                                    </MenuItem>
                                ))
                            }
                        </menu>
                    )
                }
            </div>
        </div>
    )
}