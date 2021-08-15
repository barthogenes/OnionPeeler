import { readFileSync } from 'fs';
import { Ascii85Encoder } from '../src/ascii85/encoder';

describe('Ascii85Encoder', () => {
  it('encodes Man to <~9jqo^~>', () => {
    // Arrange
    const encoder = new Ascii85Encoder();

    // Act
    const result = encoder.encode('Man ');

    // Assert
    expect(result).toBe('<~9jqo^~>');
  });

  it('encodes example string', () => {
    // Arrange
    const encoder = new Ascii85Encoder();

    // Act
    const result = encoder.encode(
      'Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.',
    );

    // Assert
    expect(result).toBe(
      "<~9jqo^BlbD-BleB1DJ+*+F(f,q/0JhKF<GL>Cj@.4Gp$d7F!,L7@<6@)/0JDEF<G%<+EV:2F!,O<DJ+*.@<*K0@<6L(Df-\\0Ec5e;DffZ(EZee.Bl.9pF\"AGXBPCsi+DGm>@3BB/F*&OCAfu2/AKYi(DIb:@FD,*)+C]U=@3BN#EcYf8ATD3s@q?d$AftVqCh[NqF<G:8+EV:.+Cf>-FD5W8ARlolDIal(DId<j@<?3r@:F%a+D58'ATD4$Bl@l3De:,-DJs`8ARoFb/0JMK@qB4^F!,R<AKZ&-DfTqBG%G>uD.RTpAKYo'+CT/5+Cei#DII?(E,9)oF*2M7/c~>",
    );
  });

  it('encodes the payload', () => {
    // Arrange
    const encoder = new Ascii85Encoder();
    const payload = readFileSync("__tests__/decodedPayload.txt", 'utf8');
    const encodedPayload = readFileSync("__tests__/rawPayload.txt", 'utf8');

    // Act
    const result = encoder.encode(payload);

    // Assert
    expect(result).toBe(encodedPayload);
  });
});
