import { useRegistration } from "../Contexts/RegistrationContext";
import { List, ListItem, ListItemText } from '@mui/material';

export default function Register() {
    const { registrations } = useRegistration();

    return(
        <List>
            {registrations.map((r, i) =>(
                <ListItem key={i}>
                    <ListItemText
                    primary={`${r.name} (${r.email})`}
                    secondary={`Kurs: ${r.course}`}
                  />
                </ListItem>
            ))}
        </List>
    );
}