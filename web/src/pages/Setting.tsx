// React modeuls
import { useEffect } from "react";
import { useCookies } from "react-cookie";

// Components
import SettingForm from "../components/setting-form/SettingForm";

const Setting = () => {
    const [ cookies ] = useCookies();

    useEffect(() => {
        if (!cookies.csrftoken) {
            window.location.replace('/signin');
        }
    }, [])

    return (
        <SettingForm />
    )
}

export default Setting;