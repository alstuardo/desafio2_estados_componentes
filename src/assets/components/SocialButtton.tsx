import Button from 'react-bootstrap/Button'
import './SocialButton.css'

interface SocialButton{
    icon: string;
}

const SocialButton: React.FC<SocialButton> = ({icon}) => {
    return (
        <>
        <Button className='icon' variant="light"><img src={icon}></img></Button>
        </>
        )
}

export default SocialButton


