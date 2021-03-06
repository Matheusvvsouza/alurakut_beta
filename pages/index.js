import React from'react';
import MainGrid from '../pages/src/components/MainGrid'
import Box from '../pages/src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../pages/src/lib/AluraKutCommons';
import { ProfileRelationsBoxWrapper } from './src/components/ProfileRelations';

function ProfileSidebar(propriedades)
{
  console.log(propriedades);
  return (
    <Box as="aside">
   <img src={`http://github.com/${propriedades.githubUser}.png`} style= {{borderRadius: '8px'}}/>
  <hr />
  <p>
  <a className="boxLink" href={`http://github.com/${propriedades.githubUser}`}>
   @{propriedades.githubUser}
  </a>
  </p>
  <hr />

  <AlurakutProfileSidebarMenuDefault/>
    </Box>
  )
}

function ProfileRelationsBox(propriedades){
  return (
         <ProfileRelationsBoxWrapper>
  <h2 className="smallTitle">
     {propriedades.title} ({propriedades.itens.length})
    </h2>
  <ul>
  {/*seguidores.map((itemAtual)=>
  {
    return (
      <li key={itemAtual}>
      <a href={`https://github.com/${itemAtual.title}.png`}>
      <img src= {itemAtual.image} />
      <span>{itemAtual.title}</span>
      </a>
      </li>
    )
  })*/}
  </ul> 

  </ProfileRelationsBoxWrapper>
  )
}
  



export default function Home() {
  const Usuario = 'Matheusvvsouza';
  const [comunidades, setComunidades] = React.useState([{

    id: '066',
    title: 'Eu odeio acordar cedo',
    image: 'https://veja.abril.com.br/wp-content/uploads/2016/05/13221481-10153668745715847-4987497781684597987-n-original.jpeg'
   }]);
  //const comunidades = comunidades[0];
  //const alteradorDeComunidades/setComunidades [ = comunidades[1];
  console.log('Nosso teste',);
  //const comunidades= ['AluraKut'];
  const pessoasFavoritas = [
  'juunegreiros',
  'omariosouto',
  'peas',
  'rafaballerini',
  'marcobrunodev',
  'felipefialho'
  ]
  // 0 - Pegar o array de dados do github

  React.useEffect(function(){
     fetch('https://api.github.com/users/peas/followers')
    .then(function (respostaDoServidor){
      return respostaDoServidor.json();
    })
    .then(function(respostaCompleta){
      console.log(respostaCompleta);
    })
  })
  console.log('seguidores antes do return',seguidores);

  // 1 - Criar um box que vai ter um map, baseado nos items do array
  // que pegamos do github

  return (
    <div>
    <AlurakutMenu/>
    <MainGrid>
    {/* <Box style="grid-area: profileArea; "> */}
    <div className="profileArea" style={{ gridArea: 'profileArea' }}>
    <ProfileSidebar githubUser={Usuario} />
    
    </div>
    <div className="WelcomeArea" style={{ gridArea: 'welcomeArea' }}>
    <Box>
      <h1 className="title">
        Bem Vindo (a)
      </h1>

   <OrkutNostalgicIconSet />
    </Box>

    <Box>
    <h2 className="subTitle"> Oque voc?? deseja fazer ?</h2>
    
    <form onSubmit={function handleCriaComunidade(e){
      e.preventDefault();
     const dadosDoForm = new FormData(e.target);
     
     console.log('campo: ', dadosDoForm.get('title'));
     console.log('campo: ', dadosDoForm.get('image'));

     const comunidade = {
       id: new Date().toISOString(),
       title: dadosDoForm.get('title'),
       image: dadosDoForm.get('image'),
     }
    const comunidadesAtualizadas = [...comunidades, comunidade];
     setComunidades(comunidadesAtualizadas)

    }}>
     <div>
      <input
      
       placeholder="Qual vai ser o nome da sua comunidade ?"
       name="title" 
       aria-label="Qual vai ser o nome da sua comunidade ?"
       type="text"
       
       />
       </div>
       <div>
      <input 
      placeholder="Coloque uma URL para usarmos de capa"
       name="image" 
       aria-label="Coloque uma URL para usarmos de capa"
       
       />
       </div>

       <button>
         Criar comunidade
       </button>
    </form>
    </Box>
    </div>
    <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
   <ProfileRelationsBox title="Seguidores" items={seguidores}/>


    <ProfileRelationsBoxWrapper>
    <h2 className="smallTitle">
        Comunidades ({comunidades.length}){
        }
      </h2>
    <ul>
    {comunidades.map((itemAtual)=>
    {
      return (
        <li key={itemAtual.id}>
        <a href={`/user/${itemAtual.title}`}>
        <img src= {itemAtual.image} />
        <span>{itemAtual.title}</span>
        </a>
        </li>
      )
    })}
    </ul> 

    </ProfileRelationsBoxWrapper>
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        Pessoas da comunidade ({pessoasFavoritas.length})
      </h2>
    
    <ul>
    {pessoasFavoritas.map((itemAtual)=>
    {
      return (
        <li key ={itemAtual}>
        <a href={`/user/${itemAtual}`}>
        <img src= {`https://github.com/${itemAtual}.png`}/>
        <span>{itemAtual}</span>
        </a>
        </li>
      )
    })}
    </ul>
    </ProfileRelationsBoxWrapper>
    
    </div>
    </MainGrid>
    </div>
  )
}