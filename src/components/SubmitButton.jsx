import {Button} from "@mui/joy";
import PropTypes from "prop-types";

function SubmitButton(props) {
    return (
        <>
            <div>
                <Button style={{}} sx={{
                    backgroundColor: '#2f3237',
                    fontWeight: 'bold',
                    marginTop: '8px',
                    marginLeft: '4.5%',
                    marginRight: '4.5%'
                }}>{props.text}</Button>
            </div>
        </>
    )
}

SubmitButton.propTypes = {
    text: PropTypes.string.isRequired
};

export default SubmitButton