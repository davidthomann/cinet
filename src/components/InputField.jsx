import Input from '@mui/joy/Input';
import {FormControl, FormLabel} from "@mui/joy";
import PropTypes from "prop-types";

function InputField(props) {
    return (
        <>
            <div style={{marginLeft: '4.5%', marginRight: '4.5%'}}>
                    <FormControl>
                        <FormLabel sx={{
                            fontSize: '13px',
                            color: "#2f3237"
                        }}>
                            {props.labelName}
                        </FormLabel>
                        <Input type={props.type} style={{border: '1.4px solid #2f3237', borderRadius: '0'}}
                               color="#2f3237"
                               placeholder={props.placeholderText}
                               size="sm"
                               variant="outlined"
                               name={props.name}
                               required
                        />
                    </FormControl>
            </div>
        </>
    );
}

InputField.propTypes = {
    labelName: PropTypes.string.isRequired,
    placeholderText: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default InputField