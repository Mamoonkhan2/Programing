import { account } from "./appwriteConfig"
import { ID } from "appwrite"
  async function  createAccount(data) {
    try {
        const response = await account.create(
            ID.unique(),
            data.email,
            data.password,
            data.name,

        )
        return response
    } catch (error) {
        return error
    }
}

  async function  loginAccount(data) {
    console.log(data)
    try {
        const response = await account.createEmailPasswordSession(data.email,data.password)
        console.log(data)
        return response
    } catch (error) {
        return error
    }
}
export  {createAccount,loginAccount}