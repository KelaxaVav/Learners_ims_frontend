

const SETTING_NAME = {
    APP_NAME: "APP_NAME",
    APP_MAINTENANCE: "APP_MAINTENANCE",
    MODERATOR_COUNTRY: "MODERATOR_COUNTRY",
    AGENT_COUNTRY: "AGENT_COUNTRY",
    ADMIN_COMMISSION: "ADMIN_COMMISSION",
    // MODERATOR_CURRENCY: "MODERATOR_CURRENCY",
    // AGENT_CURRENCY: "AGENT_CURRENCY",
}

const ACCOUNT_TYPE = {
    ALL: "ALL",
    ADMIN: "ADMIN",
    AGENT: "AGENT",
    MODERATOR: "MODERATOR",

}


const getUserAccountAccessType = (date) => {
    const user = date?.data?.data?.user;
    // console.log(user);

    if (user.is_admin) {
        return ACCOUNT_TYPE.ADMIN
    }
    if (user.is_agent) {
        return ACCOUNT_TYPE.AGENT
    }
    if (user.is_moderator) {
        return ACCOUNT_TYPE.MODERATOR
    }

    return undefined;
}




export {
    SETTING_NAME,
    ACCOUNT_TYPE,
    getUserAccountAccessType,
}