import { LinearProgress } from "@mui/material"

const Loader: React.FC = () => {
    return <LinearProgress sx={{
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0
    }} color="primary"/>
}

export default Loader
