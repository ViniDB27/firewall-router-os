function ValidateMACaddress(mac) {

    if(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(mac)){
        return true
    }

    return false

}

export default ValidateMACaddress
