import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import AuthContext from '../../../auth/authContext';
import LoginScreen from '../../../components/login/LoginScreen';
import types from '../../../types/types';

const mockDispatch = jest.fn();
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate
}))

describe(' * Pruebas en el componente <LoginScreen />', () => {
	
	const value = {
		dispatch: mockDispatch,
		user: {
			logged: false
		}
	}

	const wrappLog = mount(
		<AuthContext.Provider value={ value }>
			<MemoryRouter initialEntries={ ['/login'] }>
				<LoginScreen />
			</MemoryRouter>
		</AuthContext.Provider>
	);

	beforeEach( () => {
		jest.clearAllMocks();
	} )

    test(' - Debe mostrarse correctamente', () => {

		expect( wrappLog ).toMatchSnapshot();

    });

    test(' - Debe de llamar el dispatch y la navegación', () => {
		const nameUser = 'Ricardo'

		wrappLog.find('.form_input').simulate('change', {
			target: {
				name: 'username',
				value: nameUser
			}
		});

		wrappLog.find('.btn_search').simulate('click');

		// < Dispatch
		expect( mockDispatch ).toHaveBeenCalled();
		expect( mockDispatch ).toHaveBeenCalledTimes(1);
		expect( mockDispatch ).toHaveBeenCalledWith({
            type: types.login,
        	payload: {
            	name: nameUser
        	}
		});
		// Navigate
		expect( mockNavigate ).toHaveBeenCalled();
		expect( mockNavigate ).toHaveBeenCalledTimes(1);
		expect( mockNavigate ).toHaveBeenCalledWith('/', {
			replace: true
		});

    });
    
	test(' - Debe de llamar el dispatch y la navegación con el ultimo path usado', () => {
		const nameUser = 'Ricardo';
		const lastPath = '/dc';

		localStorage.setItem('lastPath', lastPath)

		wrappLog.find('.form_input').simulate('change', {
			target: {
				name: 'username',
				value: nameUser
			}
		});

		wrappLog.find('.btn_search').simulate('click');

		// < Dispatch
		expect( mockDispatch ).toHaveBeenCalled();
		expect( mockDispatch ).toHaveBeenCalledTimes(1);
		expect( mockDispatch ).toHaveBeenCalledWith({
            type: types.login,
        	payload: {
            	name: nameUser
        	}
		});
		// Navigate
		expect( mockNavigate ).toHaveBeenCalled();
		expect( mockNavigate ).toHaveBeenCalledTimes(1);
		expect( mockNavigate ).toHaveBeenCalledWith( lastPath, {
			replace: true
		});
	});
	
    
});
