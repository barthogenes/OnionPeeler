import { readFileSync } from 'fs';
import { Ascii85Decoder } from '../src/ascii85/decoder';

describe('decoder', () => {
  it('decodes <~9jqo^~> to Man', () => {
    // Arrange
    const decoder = new Ascii85Decoder();

    // Act
    const result = decoder.decode('<~9jqo^~>');

    // Assert
    expect(result).toBe('Man ');
  });

  it('decodes example string', () => {
    // Arrange
    const decoder = new Ascii85Decoder();

    // Act
    const result = decoder.decode(
      "<~9jqo^BlbD-BleB1DJ+*+F(f,q/0JhKF<GL>Cj@.4Gp$d7F!,L7@<6@)/0JDEF<G%<+EV:2F!,O<DJ+*.@<*K0@<6L(Df-\\0Ec5e;DffZ(EZee.Bl.9pF\"AGXBPCsi+DGm>@3BB/F*&OCAfu2/AKYi(DIb:@FD,*)+C]U=@3BN#EcYf8ATD3s@q?d$AftVqCh[NqF<G:8+EV:.+Cf>-FD5W8ARlolDIal(DId<j@<?3r@:F%a+D58'ATD4$Bl@l3De:,-DJs`8ARoFb/0JMK@qB4^F!,R<AKZ&-DfTqBG%G>uD.RTpAKYo'+CT/5+Cei#DII?(E,9)oF*2M7/c~>",
    );

    // Assert
    expect(result).toBe(
      'Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.',
    );
  });

  it('decodes the payload', () => {
    // Arrange
    const decoder = new Ascii85Decoder();
    const rawPayload = readFileSync("__tests__/rawPayload.txt", 'utf8');
    const decodedPayload = readFileSync("__tests__/decodedPayload.txt", 'utf8');

    // Act
    const result = decoder.decode(rawPayload);

    // Assert
    expect(result).toBe(decodedPayload);
  });
});
