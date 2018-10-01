import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

process.env.RAZZLE_API_URL = "http://localhost"
configure({ adapter: new Adapter() })