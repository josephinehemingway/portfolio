import { Tag } from "antd"
import './styles.css'
import { ArrowRightOutlined } from "@ant-design/icons"
import { portfolio } from "../static"
import cn from 'classnames'


interface CustomTagProps {
    text: string
}

export const CustomTag: React.FC<CustomTagProps> = ({text}) => {
    return <Tag bordered={false} className="tag" color="blue">
        {text}
    </Tag>
}

interface NavLinkProps {
    onClick: () => void
    port: portfolio
    selectedPortfolio: portfolio
}

export const NavLink: React.FC<NavLinkProps> = (props) => {
    const selected = props.selectedPortfolio === props.port

    return (
        <a className={cn({['selected']: selected})} target="_blank" rel="noopener noreferrer" onClick={props.onClick}>
            {props.port.toUpperCase()}
            <ArrowRightOutlined className="icon"/>
        </a>
    )
}