import MainGrid from '../pages/src/components/MainGrid'
import Box from '../pages/src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../pages/src/lib/AluraKutCommons';
import { ProfileRelationsBoxWrapper } from './src/components/ProfileRelations';

function ProfileSidebar(propriedades)
{
  console.log(propriedades);
  return (
    <Box>
    <img src={`http://github.com/${propriedades.githubUser}.png`} style= {{borderRadius: '8px'}}/>
    </Box>
  )
}





export default function Home() {
  const Usuario = 'Matheusvvsouza';
  const pessoasFavoritas = ['juunegreiros',
  'omariosouto',
  'peas',
  'rafaballerini',
  'marcobrunodev',
  'LuiseKelles',
  'felipefialho'
  ]

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
   <OrkutNostalgicIconSet></OrkutNostalgicIconSet>
    </Box>
    </div>
    <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        Pessoas da comunidade ({pessoasFavoritas.length})
      </h2>
    
    <ul>
    {pessoasFavoritas.map((itemAtual)=>
    {
      return (
        <li>
        <a href={`/user/$(itematual)`} key={itemAtual}>
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