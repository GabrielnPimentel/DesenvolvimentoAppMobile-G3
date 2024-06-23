import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container:{
        flex: 1,
        gap: 25,
        marginHorizontal: 25,
    },

    headerContainer:{
        flexDirection: 'row',
        backgroundColor: '#70B9BE',
        borderColor: '#0A2533',
        borderRadius: 10,
        padding: 10,
        marginTop: 55,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    usuarioNome:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000'
    },

    categoriaContainer:{
        gap: 12
    },

    categoriaTitle:{
        fontSize: 20,
        fontWeight: 'bold'
    },

    categoriaCard:{
        backgroundColor: '#70B9BE',
        borderRadius: 40,
        padding: 10,
        marginRight: 10,
    },

    nomeCategoria:{
        fontSize: 16,
        backgroundColor: '#70B9BE',
    },

    pratoContainer:{},

    pratosCards:{
        width: 260,
        height: 190,
        backgroundColor: '#70B9BE',
        borderRadius: 16,
        position: 'relative',
        marginRight: 16
    },

    imgPrato:{
        width: '100%',
        height: '100%',
        borderRadius: 16
    },
    
    pratoInfo:{
        position: 'absolute',
        justifyContent: 'space-between',
        padding: 10,
        bottom: 10
    },

    nomePrato:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },

    pratoDatas:{
        flexDirection: 'row',
        gap: 12,
        zIndex: 10
    },

    receitasContainer:{
        marginTop: 20,
        marginBottom: 20,
    },

    receitasCard:{
        height: 200,
        borderRadius: 10,
        padding: 10,
        marginRight: 14,
        alignItems: 'center',
        gap: 12
    },

    imgPratoPop:{
        height: 150,
        width: 150,
        borderRadius: 12
    },

    receitaNome:{
        fontSize: 16,
        fontWeight: 'bold'
    },

})