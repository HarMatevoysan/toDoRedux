import axios from "axios"

export default class ToDoService {
   static async getTodo () {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      return response.data
   }

}