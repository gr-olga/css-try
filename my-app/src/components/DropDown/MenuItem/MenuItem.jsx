export default function MenuItem(props){
    const { active, disabled, children, ...rest } = props;
    return(
        <div {...rest}  disabled={disabled} active={active} className="menu-root">
            {props.children}
        </div>
    )
}