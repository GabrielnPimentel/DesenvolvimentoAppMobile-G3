import { Pocketchef } from "./StackRoutes";
import { RootTabParamsList } from "./TabsRoutes";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends Pocketchef {}
    interface RootParamList extends RootTabParamsList {}
  }
}
