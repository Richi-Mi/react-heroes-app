import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Hero from "../../../components/hero/HeroScreen";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate
}))

describe(' * Pruebas sobre el componente <Hero />', () => {
    
    test(' - No debe de mostrar un heroe si el URL esta mal', () => {
        
        const wrappHero = mount(
            <MemoryRouter initialEntries={ ['/heroe'] }>
                <Routes>
                    <Route path='/heroe' element={ <Hero /> } />
                    <Route path='/' element={ <h1> No Heroe found</h1> } />
                </Routes>
            </MemoryRouter>
        );
        expect( wrappHero.find('h1').text().trim() ).toBe('No Heroe found') 
    });

    test(' - Debe de mostrar un heroe si el URL esta correcto', () => {
        
        const wrappHero = mount(
            <MemoryRouter initialEntries={ ['/heroe/marvel-spider'] }>
                <Routes>
                    <Route path='/heroe/:heroeID' element={ <Hero /> } />
                    <Route path='/' element={ <h1> No Heroe found</h1> } />
                </Routes>
            </MemoryRouter>
        );
        expect( wrappHero.find('h3').text().trim() ).toBe('Spider Man'); 
    });

    test(' - Debe llamar a la pantalla anterior', () => {
        const wrappHero = mount(
            <MemoryRouter initialEntries={ ['/heroe/marvel-spider'] }>
                <Routes>
                    <Route path='/heroe/:heroeID' element={ <Hero /> } />
                </Routes>
            </MemoryRouter>
        );
        wrappHero.find('.btn_return').simulate('click');

        expect( mockNavigate ).toHaveBeenCalled();
        expect( mockNavigate ).toHaveBeenCalledTimes(1);
        expect( mockNavigate ).toHaveBeenCalledWith( -1 );
    });

    test(' - No Debe de mostrar un heroe si el URL o ID es incorrecto', () => {
        
        const wrappHero = mount(
            <MemoryRouter initialEntries={ ['/heroe/marvel-spider123131'] }>
                <Routes>
                    <Route path='/heroe/:heroeID' element={ <Hero /> } />
                    <Route path='/' element={ <h1> No Heroe found</h1> } />
                </Routes>
            </MemoryRouter>
        );
        expect( wrappHero.find('h1').text().trim() ).toBe('No Heroe found') 
    });
    
    
});
