import {describe, expect, it, vi} from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Chip from "./Chip";

describe("Chip component tests", () => {
    it("should display chip component without any problem", () => {
        render(<Chip label="mockLabel" onRemove={vi.fn()} />);
        expect(screen.getByText("mockLabel")).toBeInTheDocument();
    });

    it("should have clickable close icons", () => {
        const mockRemove = vi.fn();
        render(<Chip label="mockLabel" onRemove={mockRemove} />);

        const closeButton = screen.getByRole("button");
        fireEvent.click(closeButton);

        expect(mockRemove).toHaveBeenCalledTimes(1);
    });
});
