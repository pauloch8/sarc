import { RemoveHtmlStripTags } from '@/infrastrutura/portas/remove-html/RemoveHtmlStripTags';

describe('RemoveHtmlStripTags', () => {
    test('remove o texto html', async () => {
        const sut = new RemoveHtmlStripTags();
        expect(sut.remover('Some text <b>and</b> text')).toBe(
            'Some text and text',
        );
    });
});
