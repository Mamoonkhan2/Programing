
0x30e579704073    19  488b4510       REX.W movq rax,[rbp+0x10]
0x30e579704077    23  48c1e820       REX.W shrq rax, 32
0x30e57970407b    27  83f800         cmpl rax,0x0
0x30e57970407e    30  0f9cc3         setll bl
0x30e579704081    33  0fb6db         movzxbl rbx,rbx
0x30e579704084    36  488b5510       REX.W movq rdx,[rbp+0x10]
0x30e579704088    40  f6c201         testb rdx,0x1
0x30e57970408b    43  0f8563000000   jnz 148  (0x30e5797040f4)
0x30e579704091    49  83fb00         cmpl rbx,0x0
0x30e579704094    52  0f8537000000   jnz 113  (0x30e5797040d1)
                  -- B4 start --
0x30e57970409a    58  83e001         andl rax,0x1
                  -- B9 start --
0x30e57970409d    61  83f800         cmpl rax,0x0
0x30e5797040a0    64  0f8409000000   jz 79  (0x30e5797040af)
                  -- B10 start --
0x30e5797040a6    70  498b45c0       REX.W movq rax,[r13-0x40]
0x30e5797040aa    74  e904000000     jmp 83  (0x30e5797040b3)
                  -- B11 start --
0x30e5797040af    79  498b45b8       REX.W movq rax,[r13-0x48]
                  -- B12 start (deconstruct frame) --
0x30e5797040b3    83  488be5         REX.W movq rsp,rbp
0x30e5797040b6    86  5d             pop rbp
0x30e5797040b7    87  c21000         ret 
