import React from "react";
import {
  Chat,
  Channel,
  ChannelHeader,
  Thread,
  Window
} from "stream-chat-react";
import { MessageList, MessageInput } from "stream-chat-react";
import { StreamChat } from "stream-chat";

import "stream-chat-react/dist/css/index.css";

// App Name: Chatting App
// Slogan: The Sweet You Can't Eat Without Chat App..!!
// Developed By: MOHAMMAD KUMAIL


const chatClient = new StreamChat("qk4nn7rpcn75"); 
const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiY29vbC1za3ktOSJ9.mhikC6HPqPKoCP4aHHfuH9dFgPQ2Fth5QoRAfolJjC4"; // Demo Stream Token

chatClient.setUser(
  {
    id: "cool-sky-9",
    name: "Cool sky",
    image: "https://getstream.io/random_svg/?id=cool-sky-9&name=Cool+sky"
  },
  userToken
);

const channel = chatClient.channel("messaging", "godevs", {
  // add as many custom fields as you'd like
  image:
    "https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png",
  name: "Talk about Go"
});

const App = () => (
  <Chat client={chatClient} theme={"messaging light"}>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;






// import React from "react";
// import { BrowserRouter as Router, Switch } from "react-router-dom";

// import Chat from "./Chat";
// import Login from "./Login";

// import UnauthedRoute from "./UnauthedRoute";
// import AuthedRoute from "./AuthedRoute";

// const App = () => (
//   <Router>
//     <Switch>
//       <UnauthedRoute path="/auth/login" component={Login} />
//       <AuthedRoute path="/" component={Chat} />
//     </Switch>
//   </Router>
// );

// export default App;