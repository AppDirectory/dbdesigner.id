import NewProject from "../../request/newProject.request";
import { request2, requestHelper } from "../../helper/RequestConnector";
export default {
  createProject: request2(async context => {
    context.commit("setLoding", true);
    var respond = await requestHelper(NewProject, {
      title: context.inputs.title,
      description: context.inputs.description
    });
    context.commit("setLoding", false);
    context.rootDispatch('diagram/loadProject',{
      id:respond.payload.id
    })
  })
};