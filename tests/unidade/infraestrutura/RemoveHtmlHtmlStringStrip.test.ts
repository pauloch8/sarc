import { RemoveHtmlStringStrip } from '@/infrastrutura/portas/remove-html/RemoveHtmlStringStrip';

describe('RemoveHtmlStringStrip', () => {
    test('remove o texto html', async () => {
        const sut = new RemoveHtmlStringStrip();
        expect(sut.remover('Some text <b>and</b> text')).toBe(
            'Some text and text',
        );
    });
});
