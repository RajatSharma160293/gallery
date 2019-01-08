import { NbGalleryOrder } from './nb-gallery-order.model';
import { NbGalleryAction } from './nb-gallery-action.model';
export interface INbGalleryOptions {
    width?: string;
    height?: string;
    breakpoint?: number;
    fullWidth?: boolean;
    layout?: string;
    startIndex?: number;
    linkTarget?: string;
    lazyLoading?: boolean;
    item?: boolean;
    itemPercent?: number;
    itemArrows?: boolean;
    itemArrowsAutoHide?: boolean;
    itemSwipe?: boolean;
    itemAnimation?: string;
    itemSize?: string;
    itemAutoPlay?: boolean;
    itemAutoPlayInterval?: number;
    itemAutoPlayPauseOnHover?: boolean;
    itemInfinityMove?: boolean;
    itemActions?: NbGalleryAction[];
    itemDescription?: boolean;
    itemBullets?: boolean;
    thumbnails?: boolean;
    defaultVideoThumbnnailUrl?: string;
    thumbnailsColumns?: number;
    thumbnailsRows?: number;
    thumbnailsPercent?: number;
    thumbnailsMargin?: number;
    thumbnailsArrows?: boolean;
    thumbnailsArrowsAutoHide?: boolean;
    thumbnailsSwipe?: boolean;
    thumbnailsMoveSize?: number;
    thumbnailsOrder?: NbGalleryOrder;
    thumbnailsRemainingCount?: boolean;
    thumbnailsAsLinks?: boolean;
    thumbnailsAutoHide?: boolean;
    thumbnailMargin?: number;
    thumbnailSize?: string;
    thumbnailActions?: NbGalleryAction[];
    preview?: boolean;
    previewDescription?: boolean;
    previewSwipe?: boolean;
    previewFullscreen?: boolean;
    previewForceFullscreen?: boolean;
    previewCloseOnClick?: boolean;
    previewCloseOnEsc?: boolean;
    previewKeyboardNavigation?: boolean;
    previewAnimation?: boolean;
    previewAutoPlay?: boolean;
    previewAutoPlayInterval?: number;
    previewAutoPlayPauseOnHover?: boolean;
    previewInfinityMove?: boolean;
    previewZoom?: boolean;
    previewZoomStep?: number;
    previewZoomMax?: number;
    previewZoomMin?: number;
    previewRotate?: boolean;
    previewDownload?: boolean;
    previewCustom?: (index: number) => void;
    previewBullets?: boolean;
    arrowPrevIcon?: string[];
    arrowNextIcon?: string[];
    closeIcon?: string[];
    fullscreenIcon?: string[];
    spinnerIcon?: string[];
    zoomInIcon?: string[];
    zoomOutIcon?: string[];
    rotateLeftIcon?: string[];
    rotateRightIcon?: string[];
    downloadIcon?: string[];
    actions?: NbGalleryAction[];
}
export declare class NbGalleryOptions implements INbGalleryOptions {
    width?: string;
    height?: string;
    breakpoint?: number;
    fullWidth?: boolean;
    layout?: string;
    startIndex?: number;
    linkTarget?: string;
    lazyLoading?: boolean;
    item?: boolean;
    itemPercent?: number;
    itemArrows?: boolean;
    itemArrowsAutoHide?: boolean;
    itemSwipe?: boolean;
    itemAnimation?: string;
    itemSize?: string;
    itemAutoPlay?: boolean;
    itemAutoPlayInterval?: number;
    itemAutoPlayPauseOnHover?: boolean;
    itemInfinityMove?: boolean;
    itemActions?: NbGalleryAction[];
    itemDescription?: boolean;
    itemBullets?: boolean;
    thumbnails?: boolean;
    defaultVideoThumbnnailUrl?: string;
    thumbnailsColumns?: number;
    thumbnailsRows?: number;
    thumbnailsPercent?: number;
    thumbnailsMargin?: number;
    thumbnailsArrows?: boolean;
    thumbnailsArrowsAutoHide?: boolean;
    thumbnailsSwipe?: boolean;
    thumbnailsMoveSize?: number;
    thumbnailsOrder?: NbGalleryOrder;
    thumbnailsRemainingCount?: boolean;
    thumbnailsAsLinks?: boolean;
    thumbnailsAutoHide?: boolean;
    thumbnailMargin?: number;
    thumbnailSize?: string;
    thumbnailActions?: NbGalleryAction[];
    preview?: boolean;
    previewDescription?: boolean;
    previewSwipe?: boolean;
    previewFullscreen?: boolean;
    previewForceFullscreen?: boolean;
    previewCloseOnClick?: boolean;
    previewCloseOnEsc?: boolean;
    previewKeyboardNavigation?: boolean;
    previewAnimation?: boolean;
    previewAutoPlay?: boolean;
    previewAutoPlayInterval?: number;
    previewAutoPlayPauseOnHover?: boolean;
    previewInfinityMove?: boolean;
    previewZoom?: boolean;
    previewZoomStep?: number;
    previewZoomMax?: number;
    previewZoomMin?: number;
    previewRotate?: boolean;
    previewDownload?: boolean;
    previewCustom?: (index: number) => void;
    previewBullets?: boolean;
    arrowPrevIcon?: string[];
    arrowNextIcon?: string[];
    closeIcon?: string[];
    fullscreenIcon?: string[];
    spinnerIcon?: string[];
    zoomInIcon?: string[];
    zoomOutIcon?: string[];
    rotateLeftIcon?: string[];
    rotateRightIcon?: string[];
    downloadIcon?: string[];
    actions?: NbGalleryAction[];
    constructor(obj: INbGalleryOptions);
}
