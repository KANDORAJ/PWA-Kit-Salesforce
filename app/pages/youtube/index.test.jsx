import React from "react";
import { renderWithProviders } from "../../utils/test-utils";
import Youtube from "./index";

test ('Youtube component renders with the correct video URL', () => {
    const { getByTitle } = renderWithProviders(<Youtube />);
    const videoPlayer = getByTitle("Amazing Places to Visit in Turkey | Best Places to Visit in Turkey - Travel Video")

    expect(videoPlayer).toBeInTheDocument();
    expect(videoPlayer).toHaveAttribute("src", "https://www.youtube.com/embed/2vqvBzb0xJY");
})

test ('Youtube component renders an iframe element', () => {
    const { container } = renderWithProviders(<Youtube />);
    const iframeElement = container.querySelector("iframe");

    expect(iframeElement).toBeInTheDocument();
})
 // Path: app/pages/youtube/index.jsx