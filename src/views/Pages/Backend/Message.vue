<template>
    <!-- Page Content -->
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-12">
                    <div class="chat-window">

                        <!-- Chat Left -->
                        <div class="chat-cont-left">
                            <div class="chat-header">
                                <span>Chats</span>
                                <a href="javascript:void(0)" class="chat-compose">
                                    <i class="material-icons">control_point</i>
                                </a>
                            </div>
                            <Search></Search>
                            <!-- <form class="chat-search">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <i class="fas fa-search"></i>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Search">
                                </div>
                            </form> -->
                            <div class="chat-users-list">
                                <div class="chat-scroll">
                                   <ChatMember></ChatMember>
                                    
                                </div>
                            </div>
                        </div>
                        <!-- /Chat Left -->

                        <!-- Chat Right -->
                        <div class="chat-cont-right">
                       <Chat></Chat>
                        </div>
                        <!-- /Chat Right -->

                    </div>
                </div>
            </div>
            <!-- /Row -->

        </div>

    </div>

</template>

<script>
import Search from '../../components/Message/Search.vue'
import ChatMember from '../../components/Message/ChatMember.vue'
import Chat from '../../components/Message/Chat.vue'
export default{
    name:"Message",
    components:{
        Search,
        ChatMember,
        Chat
    }
}

</script>