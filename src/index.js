import './styles/style.scss';
import {activeChatsOptions, chats, existUsers} from "./mock-data";

import button from './partials/button';
import input from './partials/input';
import emptyChats from './partials/empty-chats';
import message from './partials/message';

import main from "./pages/main";
import login from "./pages/login";
import auth from "./pages/auth";
import openProfile from "./components/open-profile";
import searchChat from "./components/search-chat";
import listChats from "./components/list-chats";
import activeChat from "./components/active-chat";
import inputMessage from "./components/input-message";
import listMessages from "./components/list-messages";

import handlerLogin from './modules/login';
import handlerAuth from './modules/auth';
import handlerChat from "./modules/chat";
import handlerOpenProfile from "./modules/openProfile";
import handlerSearchProfile from "./modules/search-profile";

import processingRouting from './utils/processingRouting';
import parseDate from "./utils/parseDate";
import profile from "./components/profile";

const initialOptionsRouting = {
    main: main(),
    login: login(),
    auth: auth()
}

let isOpenProfile = false;
const myProfile = existUsers.find(item=> item.id === 1);

processingRouting(initialOptionsRouting);

function handlers() {
    handlerLogin();
    handlerAuth();
    handlerOpenProfile(clbOpenProfile);
    handlerChat(clbActiveChat);
    handlerSearchProfile(clbSearchChats);
}

function clbActiveChat(chatId) {
    const changeActiveChats = chats.map(chat => {
            chat.active = chat.id === +chatId
            return chat
        }
    )

    const findChatsOptions = activeChatsOptions().find(item => item.id === +chatId);

    processingRouting({
        ...initialOptionsRouting,
        main: main({
            openProfile: openProfile(),
            searchChat: searchChat(),
            listChats: listChats({
                chats: changeActiveChats
            }),
            activeChat: findChatsOptions
                ? activeChat({
                    linkUser: findChatsOptions.linkUser,
                    messages: listMessages({
                        messages: findChatsOptions.messages,
                        myId: 1,
                        dateMessage: parseDate(new Date(), 'dayMonth')
                    }),
                    inputMessage: inputMessage(),
                })
                : null
        })
    })

    handlers()
}

function clbSearchChats(searchText) {
    const findChats = chats.filter(profile => (profile.name).toLowerCase().includes(searchText.toLowerCase()))

    processingRouting({
        ...initialOptionsRouting,
        main: main({
            // isOpenProfile: isOpenProfile,
            openProfile: openProfile(),
            searchChat: searchChat({currentValue: searchText}),
            listChats: listChats({chats: findChats}),
        })
    })

    handlers()
}

function clbOpenProfile(){
    processingRouting({
        ...initialOptionsRouting,
        main: main({
            isOpenProfile: !isOpenProfile,
            openProfile: openProfile(),
            searchChat: isOpenProfile ? searchChat() :null,
            listChats: isOpenProfile ? listChats() :null,
            profile: profile({...myProfile, isShow: true})
        })
    })

    isOpenProfile = !isOpenProfile

    handlers()
}

handlers()