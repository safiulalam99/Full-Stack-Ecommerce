import { RULES } from "../roles";
const check = (rules: any, role: any, action: any) => {
    const permissions = rules[role]
    if (!permissions) {
      // role is not present in the rules
      return false
    }
  
    const staticPermissions = permissions.view
    if (staticPermissions && staticPermissions.includes(action)) {
      // static rule not provided for action
      return true
    }
    const dynamicPermissions = permissions.actions
    if (dynamicPermissions) {
      const permissionCondition = dynamicPermissions.includes(action)
      if (!permissionCondition) {
        return false
      }
  
      return true
    }
    return false
  }

const Can = ({role,perform,yes,no}:any)=>{
    return check(RULES,role,perform)? yes():no()
}

Can.defaultProps={ 
    yes:() =>null,
    no:() =>null,
    role:'',
    perform:'',
}
export default Can