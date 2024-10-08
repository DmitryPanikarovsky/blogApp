import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe("Sidebar", () => {
	test("Test render", () => {
        renderWithTranslation(<Sidebar />);
		expect(screen.getByTestId("sidebar")).toBeInTheDocument();
	});

	test("Test toggle", () => {
        renderWithTranslation(<Sidebar />);
		expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
	});
});
