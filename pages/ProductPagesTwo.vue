<template>
    <div class="container">
        <HeaderComponent></HeaderComponent>
        <div class="p1">
            <div class="flex">
            <p>Главная</p>
            <img src="../src/assets/Back.svg" height="12" alt="">
            <p>Гидроциклы</p>
            <img src="../src/assets/Back.svg" height="12" alt="">
            </div>
            <p class="span1">Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</p>
        </div>
        <div class="block1 flex">
            <Block1Left></Block1Left>
            <Block1Right></Block1Right>
        </div>
        <Block2Mirsaid />
        <ContainerComponent />
    </div>
    <FooterComponent />
</template>

<script>
import HeaderComponent from "../src/components/HeaderforContainerItem.vue";
import Block1Left from "../src/components/Block1Left.vue"
import Block1Right from "../src/components/Block1Right.vue"
import Block2Mirsaid from "../src/components/Block2Mirsaid.vue"
import ContainerComponent from "../src/components/ContainerComponent.vue";
import FooterComponent from "../src/components/FooterComp.vue"

export default {
    name: "ProductPagesTwo",
    components: {
        HeaderComponent,
        Block1Left,
        Block1Right,
        Block2Mirsaid,
        ContainerComponent,
        FooterComponent
    }
}
</script>

<style scoped>
.container {
    width: 70%;
    margin: 46px auto 99px;
}

.flex {
    display: flex;
    align-items: center;
    gap: 5px;
}



.p1 {
    width: 100%;
    display: flex;
    align-items: center;
}
.p1 p{
    color: #c4c4c4;
}   
.block1 {
    margin: 36px 0 80px;
    justify-content: space-between;
    gap: 100px;
}

.span1{
    display: block;
    width: 100%;
}
</style>

<style scoped>
    @media only screen and (max-width:321px) {
        .container { 
            width: 100%;
        }
        .p1{
            flex-direction: column;
        }
        
    }

    @media only screen and (max-width:1300px) {
        .flex {
            flex-direction: column;
        }
    }
</style>