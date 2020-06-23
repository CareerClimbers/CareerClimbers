function clean(s){ 
    return s.replace(/[\n\r\t]/g, ''); 
}

module.exports = clean