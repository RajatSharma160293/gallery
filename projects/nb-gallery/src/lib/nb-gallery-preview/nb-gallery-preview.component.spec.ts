import {} from 'jasmine';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Renderer, SimpleChange } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NbGalleryActionComponent } from '../nb-gallery-action/nb-gallery-action.component';
import { NbGalleryPreviewComponent } from './nb-gallery-preview.component';
import { NbGalleryArrowsComponent } from '../nb-gallery-arrows/nb-gallery-arrows.component';
import { NbGalleryBulletsComponent } from '../nb-gallery-bullets/nb-gallery-bullets.component';
import { NbGalleryHelperService } from '../nb-gallery-helper.service';

describe('NbGalleryPreviewComponent', () => {
    let fixture: ComponentFixture<NbGalleryPreviewComponent>;
    let comp: NbGalleryPreviewComponent;
    let el, prevArrow, nextArrow, image;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ NbGalleryPreviewComponent, NbGalleryArrowsComponent, NbGalleryBulletsComponent, NbGalleryActionComponent ],
          providers: [ NbGalleryHelperService, Renderer ]
        })
        .overrideComponent(NbGalleryPreviewComponent, {
            set: {
                styleUrls: [],
            }
        })

        fixture = TestBed.createComponent(NbGalleryPreviewComponent);
        comp = fixture.componentInstance;
        comp.images = ['image-1.jpg', 'image-2.jpg', 'image-3.jpg'];
        comp.descriptions = ['1', '2', '3'];
        comp.src = "#";
        fixture.detectChanges();
        el = fixture.debugElement.nativeElement;
        image = el.querySelector('.nb-gallery-preview-img');
    });

    it('should create component', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });

    it('should show next image', (done) => {
        fixture.detectChanges();
        comp.open(0);
        comp.loading = false;
        comp.showNext();

        setTimeout(() => {
            fixture.detectChanges();
            expect(image.getAttribute('src')).toEqual('image-2.jpg');
            done();
        }, 1000)
    });

    it('should not show next image if there is no more images', (done) => {
        fixture.detectChanges();
        comp.open(2);
        comp.loading = false;
        comp.showNext();

        setTimeout(() => {
            fixture.detectChanges();
            expect(image.getAttribute('src')).toEqual('image-3.jpg');
            done();
        }, 1000)
    });

    it('should start from the beggining if there is no more images and infinity move is true', (done) => {
        fixture.detectChanges();
        comp.infinityMove = true;
        comp.open(2);
        comp.loading = false;
        comp.showNext();

        setTimeout(() => {
            fixture.detectChanges();
            expect(image.getAttribute('src')).toEqual('image-1.jpg');
            done();
        }, 1000)
    });

    it('should show prev image', (done) => {
        fixture.detectChanges();
        comp.open(1);
        comp.loading = false;
        comp.showPrev();

        setTimeout(() => {
            fixture.detectChanges();
            expect(image.getAttribute('src')).toEqual('image-1.jpg');
            done();
        }, 1000)
    });

    it('should not show prev image if there is no more images', (done) => {
        fixture.detectChanges();
        comp.open(0);
        comp.loading = false;
        comp.showPrev();

        setTimeout(() => {
            fixture.detectChanges();
            expect(image.getAttribute('src')).toEqual('image-1.jpg');
            done();
        }, 1000)
    });

    it('should start from the end if there is no more images and infinity move is true', (done) => {
        fixture.detectChanges();
        comp.infinityMove = true;
        comp.open(0);
        comp.loading = false;
        comp.showPrev();

        setTimeout(() => {
            fixture.detectChanges();
            expect(image.getAttribute('src')).toEqual('image-3.jpg');
            done();
        }, 1000)
    });

    it('should trigger event onOpen', (done) => {
        comp.onOpen.subscribe(() => {
            done()
        });

        fixture.detectChanges();
        comp.open(1);
    });

    it('should trigger event onClose', (done) => {
        comp.onClose.subscribe(() => {
            done()
        });

        fixture.detectChanges();
        comp.open(1);
        comp.close();
    });

    it('should prevent showing images if images arent defined', () => {
        comp.images = undefined;

        expect(comp.canShowNext()).toBeFalsy();
        expect(comp.canShowPrev()).toBeFalsy();
    });

    it('should stop auto play on moveenter if autoPlayPauseOnHover is true', (done) => {
        comp.autoPlay = true;
        comp.autoPlayInterval = 100;
        comp.autoPlayPauseOnHover = true;
        comp.open(0);
        comp.loading = false;

        image.dispatchEvent(new Event('mouseenter'));

        setTimeout(() => {
            fixture.detectChanges();
            expect(image.getAttribute('src')).toEqual('image-1.jpg');
            done();
        }, 1000)
    });

    it('should start auto play on mouseleave if autoPlayPauseOnHover is true', (done) => {
        comp.autoPlay = true;
        comp.autoPlayInterval = 100;
        comp.autoPlayPauseOnHover = true;
        comp.open(0);
        comp.loading = false;

        image.dispatchEvent(new Event('mouseenter'));
        image.dispatchEvent(new Event('mouseleave'));

        setTimeout(() => {
            fixture.detectChanges();
            expect(image.getAttribute('src')).toEqual('image-2.jpg');
            done();
        }, 1000)
    });

    it('should trigger change event on show next', () => {
        spyOn(comp.onActiveChange, 'emit');

        comp.showNext();
        expect(comp.onActiveChange.emit).toHaveBeenCalled();
    });

    it('should trigger change event on show previous', () => {
        spyOn(comp.onActiveChange, 'emit');
        comp.open(1);
        comp.loading = false;

        comp.showPrev();
        expect(comp.onActiveChange.emit).toHaveBeenCalled();
    });

    it('should emit change events during autoplay', (done) => {
        spyOn(comp.onActiveChange, 'emit');

        comp.autoPlay = true;
        comp.autoPlayInterval = 1;
        comp.autoPlayPauseOnHover = true;
        comp.open(0);
        comp.loading = false;

        image.dispatchEvent(new Event('mouseenter'));
        image.dispatchEvent(new Event('mouseleave'));

        setTimeout(() => {
            fixture.detectChanges();
            expect(comp.onActiveChange.emit).toHaveBeenCalledTimes(2);
            done();
        }, 1000);
    });

    // it('should close on escape', (done) => {
    //     comp.closeOnEsc = true;
    //     fixture.detectChanges();
    //     comp.open(1);

    //     comp.onClose.subscribe(() => {
    //         done()
    //     });

    //     let event = new KeyboardEvent('keydown', { key: "escape", detail: 27 });

    //     window.dispatchEvent(event);
    // });
})
