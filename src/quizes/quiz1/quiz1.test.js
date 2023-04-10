import { screen, render, fireEvent } from "@testing-library/react";
import Quiz1 from "./quiz1";
import { logRoles } from '@testing-library/react';

test('button has correct initial color', () => {
	//el testing lo que hara será crear un virtual DOM, entonces le indicamos qué tiene que renderizar, el test será el usuario.
	const { container } = render(<Quiz1 />); 
	// lo que hace es detectar los elementos asignados a los roles mediante getByRole
	//y moestrarlos en la terminal
	logRoles(container);
	//del screen obtenemos el elemento con el rol button y que se llaman 'Change to MidnightBlue' y se lo asignamos a colorButton
	const colorButton = screen.getByRole('button', {name: 'Change to MidnightBlue'});
	// hasta hace rato usabamos react testing library
	//ahora buscamos en jest qué se quiere validar. la funcion, si queremos analizar el color
	//tendria que ver con el estilo del color, lo que hacemos es buscar en la documentacion del jest-dom
	expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'})
  });
  
  test('button has correct initial text', () => {
	render (<Quiz1 />);
	const colorButton = screen.getByRole('button', { name:'Change to MidnightBlue' })
	expect(colorButton).toHaveTextContent('Change to MidnightBlue')
  });
  
  test('button turns MidnightBlue when clicked', () => {
	render (<Quiz1 />);
	const colorButton = screen.getByRole('button', { name:'Change to MidnightBlue' })
	fireEvent.click(colorButton);
	expect(colorButton).toHaveStyle({backgroundColor:'MidnightBlue'})
  });
  
  test('button change text to Change to MediumVioletRed',()=>{
	render(<Quiz1 />);
	const colorButton = screen.getByRole('button', { name:'Change to MidnightBlue' });
	fireEvent.click(colorButton);
	expect(colorButton).toHaveTextContent('Change to MediumVioletRed');
  })
  
  test('initial consditions', ()=>{
	render(<Quiz1 />);
	//check that the button starts enabled
	const colorButton = screen.getByRole('button', { name:'Change to MidnightBlue' });
	expect(colorButton).toBeEnabled();
  
	//check that the checkbox starts out unchecked
	const checkbox = screen.getByRole('checkbox', { name:'disable button' })
	expect(checkbox).not.toBeChecked();
  
  })
test('When checkbox is checked button should be disabled',() => {
	render(<Quiz1 />);
	const button = screen.getByRole('button', { name:'Change to MidnightBlue' });
	const checkbox = screen.getByRole('checkbox', { name:'disable button' });
	fireEvent.click(checkbox);
	expect(button).toBeDisabled()
})

test('When disable button. button is gray and when enable button button returns the original color',() => {
	render(<Quiz1 />);
	const button = screen.getByRole('button', { name:'Change to MidnightBlue' });
	const checkbox = screen.getByRole('checkbox', { name:'disable button' });
	fireEvent.click(checkbox);
	expect(button).toHaveStyle({ backgroundColor:'gray' })
	expect(button).toBeDisabled()

	fireEvent.click(checkbox);
	expect(button).toHaveStyle({ backgroundColor:'MediumVioletRed' })
	expect(button).toBeEnabled();

	fireEvent.click(button);
	expect(button).toHaveStyle({ backgroundColor:'MidnightBlue' });

	fireEvent.click(checkbox);
	expect(button).toHaveStyle({ backgroundColor:'gray' })
	expect(button).toBeDisabled();

	fireEvent.click(checkbox);
	expect(button).toHaveStyle({ backgroundColor:'MidnightBlue' })
	expect(button).toBeEnabled();

})