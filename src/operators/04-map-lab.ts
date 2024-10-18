import { fromEvent, map } from "rxjs";

const texto = document.createElement("div");
texto.setAttribute("class", "texto");
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac enim libero. Integer eget ex posuere, tincidunt ipsum id, pellentesque libero. Fusce non volutpat tortor, vitae bibendum nulla. Nam posuere in lacus nec dapibus. Quisque aliquet ipsum quis turpis lacinia, quis tempus lorem auctor. Vestibulum vitae mollis quam. Sed mollis urna est, in iaculis lorem iaculis non.
<br/><br/>
Sed fringilla quam id sapien viverra, eget cursus nisl pharetra. Maecenas in diam in erat congue facilisis a eu massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper tellus orci. Quisque fringilla vel nunc sed imperdiet. Aliquam sit amet nibh non urna semper malesuada in facilisis odio. Vivamus mollis arcu a sapien fringilla ultricies. Duis ut ex leo. Ut in est dapibus, gravida leo nec, tempus velit. Morbi imperdiet nec velit id fringilla. Praesent fermentum ut sem vel consequat.
<br/><br/>
Nulla in egestas purus. Aenean sed purus risus. Curabitur eget augue at risus malesuada ultricies. Sed suscipit, sapien ullamcorper ullamcorper varius, leo orci convallis ipsum, eget hendrerit turpis lorem quis diam. Cras euismod, magna eu bibendum vehicula, diam risus congue nisi, nec sagittis diam purus nec lectus. Aliquam vehicula nulla libero, sed elementum nisi ultrices id. Vivamus risus mauris, eleifend eu posuere vel, feugiat sed tellus. Aliquam id ipsum purus. Integer ut condimentum massa. Nam nec elementum turpis. Curabitur lobortis purus mi. Vivamus bibendum velit at nibh varius, sit amet iaculis sem ultricies. Quisque porta erat vitae lectus accumsan, sed venenatis augue vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam quis interdum metus, eu interdum elit.
<br/><br/>
Proin cursus nunc tortor. Vivamus a lacinia tortor. Morbi ultricies, nunc eu fermentum consectetur, metus nulla tempor odio, non gravida nisl odio et dui. Suspendisse auctor erat at convallis rutrum. Fusce eros tortor, elementum commodo pharetra in, vestibulum quis quam. Etiam blandit a nibh a egestas. Etiam viverra massa ac lobortis varius.
<br/><br/>
Aliquam a ultrices odio, tempor pretium risus. Donec volutpat pulvinar pulvinar. Ut ut luctus urna. Mauris dapibus nulla pharetra, commodo dolor non, ornare orci. Curabitur dictum massa sit amet vestibulum pretium. Suspendisse potenti. Integer a orci risus.
<br/><br/>  
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac enim libero. Integer eget ex posuere, tincidunt ipsum id, pellentesque libero. Fusce non volutpat tortor, vitae bibendum nulla. Nam posuere in lacus nec dapibus. Quisque aliquet ipsum quis turpis lacinia, quis tempus lorem auctor. Vestibulum vitae mollis quam. Sed mollis urna est, in iaculis lorem iaculis non.
<br/><br/>
Sed fringilla quam id sapien viverra, eget cursus nisl pharetra. Maecenas in diam in erat congue facilisis a eu massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper tellus orci. Quisque fringilla vel nunc sed imperdiet. Aliquam sit amet nibh non urna semper malesuada in facilisis odio. Vivamus mollis arcu a sapien fringilla ultricies. Duis ut ex leo. Ut in est dapibus, gravida leo nec, tempus velit. Morbi imperdiet nec velit id fringilla. Praesent fermentum ut sem vel consequat.
<br/><br/>
Nulla in egestas purus. Aenean sed purus risus. Curabitur eget augue at risus malesuada ultricies. Sed suscipit, sapien ullamcorper ullamcorper varius, leo orci convallis ipsum, eget hendrerit turpis lorem quis diam. Cras euismod, magna eu bibendum vehicula, diam risus congue nisi, nec sagittis diam purus nec lectus. Aliquam vehicula nulla libero, sed elementum nisi ultrices id. Vivamus risus mauris, eleifend eu posuere vel, feugiat sed tellus. Aliquam id ipsum purus. Integer ut condimentum massa. Nam nec elementum turpis. Curabitur lobortis purus mi. Vivamus bibendum velit at nibh varius, sit amet iaculis sem ultricies. Quisque porta erat vitae lectus accumsan, sed venenatis augue vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam quis interdum metus, eu interdum elit.
<br/><br/>
Proin cursus nunc tortor. Vivamus a lacinia tortor. Morbi ultricies, nunc eu fermentum consectetur, metus nulla tempor odio, non gravida nisl odio et dui. Suspendisse auctor erat at convallis rutrum. Fusce eros tortor, elementum commodo pharetra in, vestibulum quis quam. Etiam blandit a nibh a egestas. Etiam viverra massa ac lobortis varius.
<br/><br/>
Aliquam a ultrices odio, tempor pretium risus. Donec volutpat pulvinar pulvinar. Ut ut luctus urna. Mauris dapibus nulla pharetra, commodo dolor non, ornare orci. Curabitur dictum massa sit amet vestibulum pretium. Suspendisse potenti. Integer a orci risus.
<br/><br/>
Proin cursus nunc tortor. Vivamus a lacinia tortor. Morbi ultricies, nunc eu fermentum consectetur, metus nulla tempor odio, non gravida nisl odio et dui. Suspendisse auctor erat at convallis rutrum. Fusce eros tortor, elementum commodo pharetra in, vestibulum quis quam. Etiam blandit a nibh a egestas. Etiam viverra massa ac lobortis varius.
<br/><br/>
Aliquam a ultrices odio, tempor pretium risus. Donec volutpat pulvinar pulvinar. Ut ut luctus urna. Mauris dapibus nulla pharetra, commodo dolor non, ornare orci. Curabitur dictum massa sit amet vestibulum pretium. Suspendisse potenti. Integer a orci risus.
<br/><br/>  
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac enim libero. Integer eget ex posuere, tincidunt ipsum id, pellentesque libero. Fusce non volutpat tortor, vitae bibendum nulla. Nam posuere in lacus nec dapibus. Quisque aliquet ipsum quis turpis lacinia, quis tempus lorem auctor. Vestibulum vitae mollis quam. Sed mollis urna est, in iaculis lorem iaculis non.
<br/><br/>
Sed fringilla quam id sapien viverra, eget cursus nisl pharetra. Maecenas in diam in erat congue facilisis a eu massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper tellus orci. Quisque fringilla vel nunc sed imperdiet. Aliquam sit amet nibh non urna semper malesuada in facilisis odio. Vivamus mollis arcu a sapien fringilla ultricies. Duis ut ex leo. Ut in est dapibus, gravida leo nec, tempus velit. Morbi imperdiet nec velit id fringilla. Praesent fermentum ut sem vel consequat.
<br/><br/>
Nulla in egestas purus. Aenean sed purus risus. Curabitur eget augue at risus malesuada ultricies. Sed suscipit, sapien ullamcorper ullamcorper varius, leo orci convallis ipsum, eget hendrerit turpis lorem quis diam. Cras euismod, magna eu bibendum vehicula, diam risus congue nisi, nec sagittis diam purus nec lectus. Aliquam vehicula nulla libero, sed elementum nisi ultrices id. Vivamus risus mauris, eleifend eu posuere vel, feugiat sed tellus. Aliquam id ipsum purus. Integer ut condimentum massa. Nam nec elementum turpis. Curabitur lobortis purus mi. Vivamus bibendum velit at nibh varius, sit amet iaculis sem ultricies. Quisque porta erat vitae lectus accumsan, sed venenatis augue vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam quis interdum metus, eu interdum elit.
<br/><br/>
Proin cursus nunc tortor. Vivamus a lacinia tortor. Morbi ultricies, nunc eu fermentum consectetur, metus nulla tempor odio, non gravida nisl odio et dui. Suspendisse auctor erat at convallis rutrum. Fusce eros tortor, elementum commodo pharetra in, vestibulum quis quam. Etiam blandit a nibh a egestas. Etiam viverra massa ac lobortis varius.
<br/><br/>
Aliquam a ultrices odio, tempor pretium risus. Donec volutpat pulvinar pulvinar. Ut ut luctus urna. Mauris dapibus nulla pharetra, commodo dolor non, ornare orci. Curabitur dictum massa sit amet vestibulum pretium. Suspendisse potenti. Integer a orci risus.
`;

const body = document.querySelector("#app");
body!.appendChild(texto);

const pogressBar = document.createElement("div");
pogressBar.setAttribute("class", "progress-bar");
body!.append(pogressBar);

// función que calcula
const calcularPorcentajeScroll = (event: any) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// streams
const scrolls$ = fromEvent<Event>(document, "scroll");
scrolls$
  .pipe(map(calcularPorcentajeScroll))
  .subscribe((porcentaje) => (pogressBar.style.width = `${porcentaje}%`));
