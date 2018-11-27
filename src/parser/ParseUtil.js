function parseProto(config, protoConfig){
    if(!config || !protoConfig){
        return config
    }
    const fullConfig = Object.create(protoConfig);
    Object.entries(config).forEach(([key, value])=>{
        if(typeof value == 'object' && value.length === 0){
            return;
        }
        if(value === null){
            return;
        }
        fullConfig[key] = value;
    });
    return fullConfig;
}

export {parseProto};