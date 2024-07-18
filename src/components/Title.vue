<template>
    <div class="sub_title">
        <div class="section_inner">
            <h2 class="title">{{ $route.name }}</h2>
            <!-- <ul class="tab_menu">
                            <li 
                                   v-for="(title, i) in menu"
                                   :key="i"
                            >
                                   <router-link 
                                          @click.native="closeMenu"
                                   >
                                          {{menu[i].depth[i].txt}}
                                   </router-link>
                            </li>
                     </ul> -->
        </div>
    </div>
</template>

<script>
export default {
    name: "Title",
};
</script>
