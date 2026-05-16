import { useEffect } from 'react';
import { useThemeContext } from '../contexts/themeContext';
import './HomePage.css';

function Home() {
  const { theme, setTheme } = useThemeContext();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const swapTheme = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="home__page">
      <title>Chrona | Home</title>

      <div className="content">
        <div className="container">
          <div className="pink"></div>
          <div className="red"></div>
          <div className="orange"></div>
          <div className="yellow"></div>
          <div className="green"></div>
          <div className="blue"></div>
          <div className="purple"></div>
        </div>

        <p>Theme set to {theme} mode.</p>
        <div className="button-container">
          <button className="btn btn-pink">Test Button</button>
          <button className="btn btn-red">Test Button</button>
          <button className="btn btn-orange">Test Button</button>
          <button className="btn btn-yellow">Test Button</button>
          <button className="btn btn-green">Test Button</button>
          <button className="btn btn-blue">Test Button</button>
          <button className="btn btn-purple">Test Button</button>
          <button className="btn btn-swap-theme" onClick={swapTheme}>
            Swap Theme
          </button>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor
          massa, laoreet ut luctus ut, elementum at nulla. Donec mollis
          dignissim est sed luctus. Pellentesque tincidunt elementum metus a
          auctor. Suspendisse potenti. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Aenean eget arcu sed
          nisi cursus iaculis quis vel velit. Donec tortor nibh, sollicitudin a
          sem eu, congue sollicitudin ligula. Donec molestie, lacus et faucibus
          cursus, neque nisl feugiat sapien, at pulvinar arcu quam quis nisi.
          Nullam sed ornare libero. Pellentesque semper aliquam arcu vitae
          euismod. Vivamus vestibulum massa mi, ut dapibus neque rutrum at.
          Donec et ultrices sem. Nulla turpis mi, ultrices vitae elit placerat,
          porttitor tempor nunc.
        </p>
        <p>
          Integer eu risus vel libero sollicitudin pharetra id id urna.
          Suspendisse potenti. Fusce id ligula ante. Proin porttitor euismod
          ante, sit amet finibus massa tincidunt sit amet. Aenean sit amet
          dignissim lacus. In a odio nec massa mattis placerat. Nam tempor
          sodales tortor sit amet tempor. Nulla eu luctus felis. Praesent orci
          erat, gravida in elit eu, luctus vulputate mi. Suspendisse blandit
          convallis dapibus. Maecenas imperdiet est lacus, quis lacinia enim
          vehicula id.
        </p>
        <p>
          Donec commodo pellentesque massa, elementum vestibulum quam lobortis
          ut. Donec in efficitur ex, ac ornare leo. Aliquam gravida viverra
          tellus. Nam suscipit diam vitae est tincidunt suscipit. Aenean non
          lectus scelerisque diam laoreet convallis id eu risus. Nam molestie
          elit ut tempus euismod. Vivamus sed justo tortor.
        </p>
        <p>
          Aliquam nisl eros, commodo sit amet gravida blandit, ullamcorper sed
          neque. Sed molestie et felis vitae euismod. Etiam non tortor leo. Sed
          ac est ut dolor condimentum ullamcorper id id metus. Etiam ac est vel
          enim blandit rhoncus. Integer lobortis libero eget nisl sodales
          scelerisque. Curabitur porta enim laoreet scelerisque rhoncus. Duis a
          eros pretium nisi cursus convallis non egestas turpis. Etiam tempor
          ante et laoreet pretium. Duis nec ante finibus, ultricies felis vitae,
          mattis ex. Nam condimentum sapien turpis, quis gravida ex venenatis
          fringilla. Aliquam vel velit ante. Sed et purus sagittis, ullamcorper
          ex a, iaculis nibh. In sapien quam, tempus a urna eget, iaculis tempus
          dui. Integer non eros vel arcu venenatis ornare.
        </p>
        <p>
          Duis eget rhoncus odio. Aliquam tempor odio quam, sit amet ornare erat
          hendrerit tempor. Ut eget egestas lorem, id tristique odio. Vestibulum
          a bibendum sapien. Morbi iaculis elit nisi, id dignissim ex bibendum
          ut. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Vestibulum ac massa sem. Suspendisse elementum
          urna tortor, eu vestibulum quam laoreet ut. Sed mattis, tortor eu
          imperdiet mattis, augue diam ornare quam, non commodo est metus eget
          nunc. Quisque ac ex purus.
        </p>
        <p>
          Proin risus justo, tempus et eros at, efficitur tincidunt odio. Nulla
          lobortis magna eros. Integer quis velit tincidunt, finibus eros ut,
          gravida libero. Proin suscipit, neque ac faucibus posuere, erat justo
          vulputate nisl, a dapibus dolor orci id ex. Quisque ullamcorper
          dignissim enim eget aliquet. Etiam vitae commodo erat. Pellentesque
          faucibus placerat ultrices. Fusce elementum dignissim sem, in egestas
          odio scelerisque eget. Quisque quis arcu posuere, malesuada odio sit
          amet, suscipit turpis.
        </p>
        <p>
          Curabitur eget feugiat lorem. Aliquam eget dapibus sapien. Proin sed
          fringilla nulla. Proin non urna leo. Aenean non odio ante. Integer
          iaculis mi et sem tristique ultricies. Mauris ut nulla sit amet turpis
          cursus mattis. Mauris sed massa eget lectus vestibulum elementum.
        </p>
        <p>
          Praesent tincidunt ipsum velit, sed gravida lacus interdum posuere.
          Praesent venenatis dignissim purus, et rutrum mi feugiat ut. Ut id
          mollis risus. Suspendisse ultricies tempor felis et tincidunt.
          Phasellus in lacus erat. Nullam at metus lacus. Morbi semper finibus
          eros eu accumsan. Vivamus ac dui sit amet lacus luctus eleifend sed
          nec sapien. In elementum fringilla sagittis. Nunc non condimentum
          quam. Duis feugiat porta orci sed sodales. Nullam sit amet eros quis
          ex dignissim tempor. Aliquam in interdum urna, vitae ullamcorper
          velit. Suspendisse aliquam vestibulum venenatis. Sed ac eros mi.
        </p>
        <p>
          Aliquam consectetur sollicitudin arcu, nec sagittis nisi iaculis eu.
          Morbi ante felis, bibendum a egestas quis, lobortis nec urna. Aliquam
          at rhoncus orci. Sed libero erat, blandit in lacus sit amet, cursus
          viverra elit. Fusce gravida enim massa, ut rutrum mi fermentum vel.
          Pellentesque eget neque ac arcu condimentum ullamcorper ac non libero.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vel
          laoreet magna. Duis sagittis nisi eget mauris tempus, sed lacinia
          nulla molestie. Aenean ornare enim mauris, et varius neque efficitur
          et. Nunc quis lectus mollis, dictum libero vestibulum, ullamcorper
          risus. Fusce placerat turpis at mauris tincidunt faucibus.
        </p>
        <p>
          Pellentesque interdum volutpat tempor. Sed eget turpis dolor. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Quisque laoreet erat massa, convallis gravida neque
          volutpat eu. Praesent quis ultrices nunc. In hac habitasse platea
          dictumst. Ut eu sollicitudin risus, sit amet blandit lorem. Nunc
          vehicula vel tortor in mollis. Ut consequat, justo quis euismod
          elementum, mi tellus hendrerit libero, eu suscipit orci ligula quis
          arcu. Maecenas viverra in elit ut suscipit. Cras tortor magna, egestas
          vel molestie et, eleifend vel urna. Mauris a condimentum lectus.
          Integer bibendum scelerisque purus et sollicitudin. Cras consequat est
          ut sollicitudin mattis.
        </p>
        <p>
          Nullam pulvinar justo quis pharetra lobortis. Ut ac mattis sapien,
          auctor molestie tellus. Aliquam nibh arcu, bibendum in odio quis,
          ultrices congue tortor. Donec sem ipsum, blandit ut erat quis,
          tincidunt pellentesque nibh. Etiam ultricies mauris vel aliquet
          ullamcorper. Maecenas in sem et ante iaculis lobortis eu nec ante.
          Etiam eleifend quis arcu venenatis luctus. Praesent finibus ultricies
          lorem quis gravida. Vestibulum eget massa sit amet magna cursus
          varius. Duis ornare nisl a tortor cursus feugiat. Donec vel
          condimentum dui, eget sagittis odio. Maecenas vitae justo quam.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas.
        </p>
        <p>
          Duis iaculis non libero nec malesuada. Vestibulum fermentum orci
          scelerisque, auctor sapien ac, euismod mauris. Nunc in interdum metus.
          Nullam erat lorem, aliquet a dapibus a, convallis ornare turpis. Ut
          volutpat nisi in lorem tristique, at dignissim est congue. Fusce
          dictum, mi non pretium elementum, enim lacus elementum ante, in
          sagittis lorem felis sed sem. Suspendisse finibus quis ante et
          molestie. Sed volutpat congue quam a varius. Sed urna dui, fermentum
          eget pharetra vitae, porta ac velit. Morbi et augue cursus, commodo
          nunc sit amet, facilisis magna. Nulla eros erat, consectetur eget ante
          ut, sollicitudin sollicitudin tellus. Curabitur lorem nisi, bibendum
          eu varius sed, bibendum a ipsum. Nunc a ornare ex. Praesent in
          malesuada velit. Phasellus non turpis ut metus condimentum iaculis et
          in enim.
        </p>
        <p>
          Ut consectetur fermentum tincidunt. Fusce tempus lorem et tortor
          pharetra suscipit. Proin tempor dictum tincidunt. Curabitur feugiat et
          libero sit amet rhoncus. Ut efficitur nisl nisi, sit amet ullamcorper
          lectus lobortis sed. Vestibulum sodales pretium ante ac porttitor.
          Aliquam eu magna vulputate, varius eros vitae, dignissim ligula. In
          vitae sem id lorem elementum auctor dictum et tellus. Curabitur
          suscipit felis non faucibus feugiat. Sed ultrices ornare neque sit
          amet pellentesque.
        </p>
        <p>
          Ut velit nibh, elementum eu velit eget, tincidunt fringilla ipsum.
          Proin eget nulla feugiat, feugiat felis ac, faucibus ipsum. Vestibulum
          eget elit orci. Vivamus sagittis libero id tortor lobortis posuere.
          Mauris commodo ante ut tincidunt ultricies. Etiam volutpat, lectus a
          hendrerit vestibulum, ante lacus tincidunt massa, vel placerat nisi
          massa non dui. Donec non dignissim tortor.
        </p>
        <p>
          Proin sollicitudin tortor accumsan odio ullamcorper convallis. Duis
          maximus felis imperdiet faucibus luctus. Aenean interdum elit laoreet
          lacus imperdiet vehicula. Pellentesque elit elit, vehicula non purus
          eu, dapibus maximus mauris. Praesent ac erat nisl. Donec diam enim,
          fringilla in egestas id, feugiat nec augue. Mauris accumsan libero mi.
          Pellentesque convallis ac mauris ac volutpat. Donec placerat in mauris
          eget sagittis. Praesent quis enim vestibulum, iaculis orci et, dapibus
          magna. Pellentesque interdum imperdiet tortor quis luctus. Nunc
          faucibus nibh a urna efficitur, quis mollis metus euismod. Aenean ut
          tincidunt augue. Sed quis nisl consequat, mollis eros dignissim,
          vestibulum justo. Phasellus aliquam turpis in elit vulputate, quis
          mattis nisi aliquam.
        </p>
        <p>
          Maecenas faucibus eget enim sed posuere. Vivamus ullamcorper sem et
          porta viverra. Cras id egestas ligula. Ut et metus vel orci
          pellentesque lobortis. Duis vitae mi sapien. Vivamus metus risus,
          tincidunt vehicula sem nec, ultricies dapibus est. Quisque consequat
          id metus ac finibus. Vestibulum fermentum, nibh posuere mattis mattis,
          lacus nulla mollis massa, vel consequat felis lectus et metus.
          Curabitur quis neque vestibulum, convallis nunc sed, porttitor diam.
          Cras sagittis odio eu nisl aliquet, at aliquet est mattis. Donec
          fringilla ante a lacus aliquam vestibulum. Sed lobortis sapien ac
          fringilla facilisis. Nullam aliquet nibh id condimentum tempor.
          Pellentesque eget sem magna.
        </p>
        <p>
          Quisque velit lorem, commodo id imperdiet vehicula, posuere id purus.
          Mauris odio massa, vulputate a lorem vel, maximus pretium nisl. Sed in
          faucibus mi, in fermentum est. Etiam aliquam velit non ipsum pulvinar,
          nec pellentesque lectus sagittis. Sed purus lectus, eleifend id
          iaculis nec, faucibus ut diam. Duis non libero venenatis, mollis
          ligula eget, tincidunt nibh. Nullam volutpat porttitor ornare.
        </p>
        <p>
          Vivamus vitae aliquet metus, sit amet euismod lorem. Vestibulum
          tincidunt metus sapien, sed bibendum magna efficitur quis. In
          vulputate eros enim, in fermentum sapien scelerisque ut. Aliquam sit
          amet dolor sit amet est porttitor tristique. Suspendisse et ante
          suscipit, vehicula velit sed, consectetur dui. Mauris vel finibus
          justo. Aliquam erat volutpat. Integer eget fermentum eros. Vestibulum
          luctus massa vel libero feugiat egestas. Curabitur a lorem id sem
          egestas volutpat vel efficitur nulla. Maecenas tortor neque, gravida
          in facilisis vitae, varius et enim. Quisque quis risus at metus
          placerat volutpat. Cras rhoncus blandit sollicitudin. Suspendisse at
          velit augue. Quisque risus ipsum, vehicula vel dapibus sed, dignissim
          ut dui.
        </p>
        <p>
          Mauris ac consectetur libero, a tempor lectus. Nunc laoreet urna in
          metus laoreet, pulvinar suscipit tortor tristique. Nunc placerat
          libero mi, et commodo tortor viverra non. Phasellus porttitor sapien
          semper fermentum ornare. Phasellus hendrerit scelerisque ipsum nec
          euismod. Suspendisse vestibulum ipsum non eros aliquam, et suscipit
          purus efficitur. Vivamus sem enim, tempor non ullamcorper nec, congue
          vel augue. Nullam eget aliquet est. Nulla facilisi. Quisque a urna eu
          nisl elementum venenatis vel nec elit. Sed vitae leo non nulla
          bibendum laoreet eget vitae sem. Praesent ut vestibulum sem, eu
          condimentum orci. Praesent feugiat nisi et nisl tincidunt elementum.
          Pellentesque scelerisque porta commodo.
        </p>
        <p>
          Mauris tempor leo vel posuere faucibus. Vivamus molestie tristique
          egestas. Vestibulum diam elit, aliquet eget auctor ac, varius eget
          odio. Vestibulum varius sapien lorem, at elementum arcu tempus congue.
          Nulla posuere leo nec accumsan scelerisque. Sed laoreet est eget metus
          tincidunt fringilla non vel est. Sed at mauris eu dui bibendum
          venenatis. Maecenas id elit lorem.
        </p>
      </div>
    </div>
  );
}

export default Home;

// <>
//   <title>Chrona | Home</title>
