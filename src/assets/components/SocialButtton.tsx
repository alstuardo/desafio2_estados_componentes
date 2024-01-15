import Button from 'react-bootstrap/Button'

interface SocialButton{
    icon: string;
}

const SocialButton: React.FC<SocialButton> = ({icon}) => {
    return (
        <>
        <Button variant="light"><img src={icon}></img></Button>
        </>
        )
}

export default SocialButton


